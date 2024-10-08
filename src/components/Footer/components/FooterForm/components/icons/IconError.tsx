export const IconError = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
        >
            <g
                fill="none"
                fillRule="evenodd"
            >
                <circle
                    cx="10"
                    cy="10"
                    r="10"
                    fill="#FA5959"
                ></circle>
                <g
                    fill="#FFF"
                    transform="translate(9 5)"
                >
                    <rect
                        width="2"
                        height="7"
                        rx="1"
                    ></rect>
                    <rect
                        width="2"
                        height="2"
                        y="8"
                        rx="1"
                    ></rect>
                </g>
            </g>
        </svg>
    );
};
