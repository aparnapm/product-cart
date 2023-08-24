export interface IStep{
    title: string;
    children: React.ReactNode;
    nextDisabled?: boolean;
    error?: string;
}