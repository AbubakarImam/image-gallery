
const Loading = () => {
    return (
        <div className="loading">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                className="lds-ring"
            >
                <circle
                    cx="50"
                    cy="50"
                    fill="none"
                    stroke="#6B7280"
                    strokeWidth="4"
                    r="36"
                    strokeDasharray="169.64600329413215 58.548801098108474"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        calcMode="linear"
                        values="0 50 50;360 50 50"
                        keyTimes="0;1"
                        dur="1s"
                        begin="0s"
                        repeatCount="indefinite"
                    ></animateTransform>
                </circle>
            </svg>
        </div>
    );
};

export default Loading;
