export const IconHamburger = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="15"
            viewBox="0 0 18 15"
        >
            <path
                fill="#242A45"
                fillRule="evenodd"
                d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
            ></path>
        </svg>
    );
};
