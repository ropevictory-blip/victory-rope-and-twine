const SkeltonLoader = () => {
  return (
    <svg
      role="img"
      width="100%"
      height={460}
      aria-labelledby="loading-aria"
      viewBox="0 0 600 460"
      preserveAspectRatio="none">
      <title id="loading-aria">Loading...</title>
      <rect
        x={0}
        y={0}
        width="100%"
        height="100%"
        clipPath="url(#clip-path)"
        style={{ fill: 'url("#fill")' }}
      />
      <defs>
        <clipPath id="clip-path">
          <rect x={2} y={32} rx={2} ry={2} width={582} height={314} />
          <rect x={4} y={366} rx={2} ry={2} width={87} height={87} />
          <rect x={103} y={366} rx={2} ry={2} width={87} height={87} />
          <rect x={302} y={366} rx={2} ry={2} width={87} height={87} />
          <rect x={204} y={366} rx={2} ry={2} width={87} height={87} />
          <rect x={400} y={366} rx={2} ry={2} width={87} height={87} />
          <rect x={496} y={366} rx={2} ry={2} width={87} height={87} />
        </clipPath>
        <linearGradient id="fill">
          <stop offset="0.599964" stopColor="#f3f3f3" stopOpacity={1}>
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="1.59996" stopColor="#ecebeb" stopOpacity={1}>
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="2.59996" stopColor="#f3f3f3" stopOpacity={1}>
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SkeltonLoader;
