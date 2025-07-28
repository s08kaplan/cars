type CustomError = {
  message?: string;
  customMessage?: string;
  status?: number;
};

const MyError: React.FC<CustomError> = ({ message, customMessage }) => {
    return (
    <section className="text-center space-y-4">
      <h3 className="text-xl font-bold text-red-600">
        {message || customMessage || "Oops! Something went wrong."}
      </h3>
      <img src="/car-crash.avif" alt="car crash" className="w-full max-w-md mx-auto" />
    </section>
  );
};

export default MyError;
