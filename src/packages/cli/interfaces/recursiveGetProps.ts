import { IRepeatedGetProps } from './repeatedGetProps';

export interface IRecursiveGetProps<T> extends IRepeatedGetProps {
    iteration: number;
    output: T[];
}