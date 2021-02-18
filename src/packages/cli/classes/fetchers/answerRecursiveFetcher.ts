import { AbstractRecursiveFetcher } from '../../abstract';
import { IAnswerReponse, IRecursiveGetProps } from '../../interfaces';
import { Answers } from '../../enums';

export class AnswerRecursiveFetcher<T extends IAnswerReponse> extends AbstractRecursiveFetcher<T> {
    async recursiveGet({
        url,
        times,
        iteration = 0,
        output = []
    }: IRecursiveGetProps<T>): Promise<T[]> {
        try {
            const responses = await this.repeatedGet({
                url,
                times
            });

            const successResponses = responses
                .filter(response => response.answer === Answers.YES);

            const successTimes = successResponses.length;

            iteration += 1;

            if (successTimes > 0) {
                this.logger
                    .info(`Iteration no. ${iteration}. Amount of success responses - ${successTimes} / ${times}.`);

                times = successTimes;

                output.push(...successResponses);

                return this.recursiveGet({
                    url,
                    times,
                    iteration,
                    output
                });
            }

            if (iteration === 1 && successTimes === 0) {
                this.logger
                    .info(`Iteration no. ${iteration}. There was no success responses from ${times} sent requests.`);
            }

            return responses;
        }
        catch {
            this.logger.error(`An error occurred during iteration no. ${iteration} while recursively fetching multiple responses from ${url}.`);
        }

    }
}