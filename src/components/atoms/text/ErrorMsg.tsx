interface ErrorMsgProps {
  message: string;
}
export const ErrorMsg = ({ message }: ErrorMsgProps) => {
  return (
    <p className='text-red-500 md:leading-8 leading-5 text-base '>{message}</p>
  );
};
