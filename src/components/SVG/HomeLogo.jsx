import { useTheme } from "../../Context/ThemeContext";

function HomeLogo() {
  const theme = useTheme();
  const logoColor = theme === "light" ? "#635443" : "#c2a788"; // if light then set other

  return (
    <svg
      width="26"
      height="18"
      viewBox="0 0 26 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_437_4084)">
        <path
          d="M12.8141 8.86424C9.44042 8.86424 6.06795 8.86424 2.69432 8.86424C2.1076 8.86424 1.53359 8.76954 1 8.52007C0.0829641 8.09158 -0.0533208 7.44827 0.158036 6.62594C0.517228 5.22613 1.19634 3.97878 2.23696 2.95433C3.03619 2.16665 3.97286 1.58455 5.01001 1.15722C6.13725 0.692926 7.31415 0.408806 8.51646 0.252887C9.62753 0.108518 10.7478 0.0265157 11.8693 0.00919136C13.2529 -0.0127528 14.6366 -0.00351317 16.0144 0.128152C16.9834 0.220548 17.9501 0.347594 18.9007 0.595909C20.0487 0.896198 21.1448 1.30043 22.1519 1.94028C23.2814 2.65866 24.1465 3.61612 24.7829 4.78378C25.1247 5.41208 25.3765 6.0808 25.5405 6.77724C25.7426 7.63306 25.2518 8.39995 24.396 8.63672C23.7931 8.80419 23.1856 8.87002 22.5607 8.86771C19.313 8.85847 16.0641 8.86309 12.8164 8.86309L12.8141 8.86424Z"
          fill={logoColor}
        />
        <path
          d="M12.8329 17.9978C9.64287 17.9978 6.45287 17.9931 3.26288 18.0001C2.03517 18.0024 1.10543 17.478 0.44941 16.4594C0.147967 15.9916 0.0336258 15.4534 0.0163014 14.9048C-0.00333284 14.2488 0.405522 13.7972 1.10543 13.7983C5.72756 13.8122 10.3485 13.8064 14.9707 13.8018C15.182 13.8018 15.3195 13.8699 15.45 14.0386C15.9039 14.623 16.5056 14.9949 17.2298 15.1289C17.7888 15.2316 18.2727 14.9833 18.7312 14.6923C19.0396 14.4971 19.3168 14.2626 19.5478 13.9797C19.6483 13.8572 19.7568 13.8018 19.915 13.803C21.5008 13.8064 23.0854 13.8145 24.6712 13.8018C25.2833 13.796 25.7002 14.3562 25.6587 14.929C25.572 16.1244 25.0419 17.0542 23.9724 17.6374C23.6028 17.8384 23.2055 17.9793 22.777 17.9827C21.7399 17.992 20.7016 17.9955 19.6644 17.9955C17.3868 17.9978 15.1104 17.9955 12.8329 17.9955V17.9978Z"
          fill={logoColor}
        />
        <path
          d="M7.24037 12.499C5.21457 12.499 3.18878 12.4909 1.16298 12.5025C0.162791 12.5082 -0.114398 11.7321 0.0415207 10.9849C0.161636 10.4097 0.511588 10.1672 1.11563 10.166C3.37242 10.1602 5.6292 10.1337 7.88483 10.1729C9.58493 10.203 11.1661 10.7019 12.6051 11.6236C12.932 11.8326 13.2519 12.0532 13.5718 12.2738C13.6307 12.3142 13.7358 12.3466 13.7116 12.4366C13.6804 12.5521 13.5672 12.4955 13.4933 12.4955C11.4098 12.499 9.32622 12.4979 7.24268 12.4979L7.24037 12.499Z"
          fill={logoColor}
        />
        <path
          d="M20.8311 12.4989C21.0008 12.1467 21.278 11.9411 21.524 11.7182C22.1466 11.1546 22.8499 10.7134 23.6468 10.4362C24.0268 10.3034 24.4195 10.2144 24.8226 10.211C25.2661 10.2075 25.6484 10.6706 25.6784 11.2262C25.72 12.0034 25.2245 12.5266 24.4853 12.507C23.3824 12.4758 22.2782 12.4989 21.1752 12.4989C21.0724 12.4989 20.9696 12.4989 20.8311 12.4989Z"
          fill={logoColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_437_4084">
          <rect width="25.6793" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default HomeLogo;
