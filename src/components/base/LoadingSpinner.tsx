import { Spinner } from '@nextui-org/react';

interface LoadingSpinnerProps {
  isLoading: boolean;
  children?: React.ReactNode;
}

export const LoadingSpinner = ({ children, isLoading }: LoadingSpinnerProps) => {
  return (
    <>
      {isLoading ? (
        <div className="w-full h-64 grid place-items-center">
          <Spinner size="lg" />
        </div>
      ) : (
        children
      )}
    </>
  );
};
