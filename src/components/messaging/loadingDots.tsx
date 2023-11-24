interface LoadingDotsProps {
  dotCount?: number;
  animationDuration?: number;
}

const LoadingDots = ({dotCount = 3, animationDuration = 1}: LoadingDotsProps) => {
  const dots = Array.from({length: dotCount}, (_, index) => index + 1);

  return (
      <div className="flex items-center space-x-1">
        {dots.map((dotIndex) => (
            <div
                key={dotIndex}
                className={"bg-gray-700 h-2 w-2 rounded-full animate-bounce"}
                style={{
                  animationDelay: `${dotIndex*100}ms`,
                }}
            />
        ))}
      </div>
  );
};

export default LoadingDots;
