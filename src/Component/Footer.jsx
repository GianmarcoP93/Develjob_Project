import React from "react";
import LogoFooter from "../assets/images/logo/LogoPiccolo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray py-8">
      <div className="flex flex-row justify-center w-11/12 mx-auto space-x-80 gap-16">
        <div className="flex items-center">
          <img src={LogoFooter}></img>
        </div>
        <div className="flex flex-col items-center ">
          <div className="flex justify-center gap-8 text-white-100 pb-4">
            <Link className="font-roboto font-medium hover:text-yellow-200 ">
              Info
            </Link>
            <Link className="font-roboto font-medium hover:text-yellow-200 ">
              Profilo
            </Link>
            <Link className="font-roboto font-medium hover:text-yellow-200 ">
              Impostazioni
            </Link>
            <Link className="font-roboto font-medium hover:text-yellow-200 ">
              Legal
            </Link>
          </div>
          <div className="flex justify-center gap-5 pb-4">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.6021 41.7142C31.9546 41.7142 41.1576 32.4401 41.1576 20.9999C41.1576 9.55975 31.9546 0.285645 20.6021 0.285645C9.24954 0.285645 0.0465088 9.55975 0.0465088 20.9999C0.0465088 32.4401 9.24954 41.7142 20.6021 41.7142Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.3243 12.7141V29.2855H30.8798V12.7141H10.3243ZM28.8243 14.7855V15.2671L20.6021 20.7906L12.3798 15.2671V14.7855H28.8243ZM12.3798 27.2141V17.757L20.6021 23.2815L28.8243 17.757V27.2141H12.3798Z"
                fill="#202C38"
              />
            </svg>
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.7131 41.7142C32.0657 41.7142 41.2687 32.4401 41.2687 20.9999C41.2687 9.55975 32.0657 0.285645 20.7131 0.285645C9.36063 0.285645 0.157593 9.55975 0.157593 20.9999C0.157593 32.4401 9.36063 41.7142 20.7131 41.7142Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.852 12.7143V10.6428H23.7965V12.7143H17.6298V10.6428H15.5742V12.7143H11.4631V30.3214H29.9631V12.7143H25.852ZM15.5742 14.7857V16.8571H17.6298V14.7857H23.7965V16.8571H25.852V14.7857H27.9076V18.9285H13.5187V14.7857H15.5742ZM13.5187 28.25V21H27.9076V28.25H13.5187Z"
                fill="#202C38"
              />
            </svg>
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.8243 41.7142C32.1768 41.7142 41.3798 32.4401 41.3798 20.9999C41.3798 9.55975 32.1768 0.285645 20.8243 0.285645C9.47177 0.285645 0.268738 9.55975 0.268738 20.9999C0.268738 32.4401 9.47177 41.7142 20.8243 41.7142Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5743 31.7858V11.6785H30.0743V26.1785H17.1387L11.5743 31.7858ZM16.2877 24.107H28.0187V13.7499H13.6298V26.7854L16.2877 24.107ZM16.7132 15.8213H24.9354V17.8928H16.7132V15.8213ZM22.8798 19.9642H16.7132V22.0356H22.8798V19.9642Z"
                fill="#202C38"
              />
            </svg>
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.9354 41.7142C32.288 41.7142 41.491 32.4401 41.491 20.9999C41.491 9.55975 32.288 0.285645 20.9354 0.285645C9.58292 0.285645 0.379883 9.55975 0.379883 20.9999C0.379883 32.4401 9.58292 41.7142 20.9354 41.7142Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.9354 11.637L12.7132 14.0046V21.9444C12.7132 24.281 13.8396 26.486 15.7266 27.8438L19.7411 30.7345C20.0988 30.9903 20.5171 31.1187 20.9354 31.1187C21.3537 31.1187 21.772 30.9903 22.1297 30.7335L26.1442 27.8438C28.0312 26.486 29.1576 24.281 29.1576 21.9444V14.0046L20.9354 11.637ZM27.1021 21.9444C27.1021 23.6129 26.2973 25.1882 24.9499 26.1587L20.9354 29.0484L16.9209 26.1587C15.5735 25.1882 14.7688 23.6129 14.7688 21.9444V15.5665L20.9354 13.7912L27.1021 15.5665V21.9444Z"
                fill="#202C38"
              />
            </svg>
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.0465 41.7142C32.399 41.7142 41.6021 32.4401 41.6021 20.9999C41.6021 9.55975 32.399 0.285645 21.0465 0.285645C9.694 0.285645 0.490967 9.55975 0.490967 20.9999C0.490967 32.4401 9.694 41.7142 21.0465 41.7142Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.0465 10.6428C15.3793 10.6428 10.7687 15.289 10.7687 21C10.7687 26.7109 15.3793 31.3571 21.0465 31.3571C26.7137 31.3571 31.3243 26.7109 31.3243 21C31.3243 15.289 26.7137 10.6428 21.0465 10.6428ZM21.0465 29.2857C16.513 29.2857 12.8243 25.5685 12.8243 21C12.8243 16.4314 16.513 12.7143 21.0465 12.7143C25.58 12.7143 29.2687 16.4314 29.2687 21C29.2687 25.5685 25.58 29.2857 21.0465 29.2857ZM20.0187 21.4288V14.7857H22.0743V20.5712L25.8843 24.4106L24.431 25.8751L20.0187 21.4288Z"
                fill="#202C38"
              />
            </svg>
          </div>
          <div>
            <p className="flex justify-center text-xs text-white-100 font-montserrat font-thin">
              Design with love ©{" "}
              <span className="text-yellow-100 px-1">Team 2.</span> All right
              reserved
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row  gap-5">
            <svg
              width="46"
              height="45"
              viewBox="0 0 46 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M33.1852 1.5H13.2779C6.85437 1.5 1.64819 6.56636 1.64819 12.8154V32.1846C1.64819 38.4345 6.85529 43.5 13.2788 43.5H33.1843C39.6078 43.5 44.8149 38.4336 44.8149 32.1837V12.8154C44.8149 6.56547 39.6087 1.5 33.1852 1.5Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M23.7453 31.5C29.1378 31.5 33.5092 27.2467 33.5092 22C33.5092 16.7533 29.1378 12.5 23.7453 12.5C18.3529 12.5 13.9814 16.7533 13.9814 22C13.9814 27.2467 18.3529 31.5 23.7453 31.5Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M35.5648 10.5C36.7001 10.5 37.6204 9.60457 37.6204 8.5C37.6204 7.39543 36.7001 6.5 35.5648 6.5C34.4296 6.5 33.5093 7.39543 33.5093 8.5C33.5093 9.60457 34.4296 10.5 35.5648 10.5Z"
                fill="white"
              />
            </svg>
            <svg
              width="45"
              height="37"
              viewBox="0 0 45 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.0278 0.16817C30.0706 -0.0129945 31.2364 -0.0733824 32.3345 0.116112C34.2906 0.451931 36.103 1.37516 37.5384 2.76694C38.4726 2.78777 39.3925 2.60036 40.2059 2.33381C40.992 2.07325 41.7466 1.72328 42.4554 1.29056L42.4739 1.27806C42.7689 1.07827 43.1228 0.988313 43.4756 1.02344C43.8285 1.05856 44.1585 1.2166 44.4098 1.47078C44.661 1.72495 44.8181 2.05962 44.8544 2.41806C44.8906 2.77649 44.8038 3.13664 44.6087 3.43746C44.1846 4.0934 43.5925 5.26368 42.9307 6.57556L42.6132 7.20235C42.2342 7.952 41.8449 8.70997 41.4823 9.35967C41.2548 9.76781 41.011 10.1822 40.7652 10.5404V11.1109C40.7904 14.5231 40.1467 17.9063 38.8716 21.0629C37.5965 24.2196 35.7157 27.0865 33.3387 29.4964C30.9618 31.9062 28.1365 33.8108 25.0276 35.0989C21.9187 36.387 18.5885 37.0328 15.2313 36.9987C10.3664 37.0032 5.60388 35.5786 1.51687 32.8965C1.22474 32.7044 1.00539 32.4173 0.894684 32.0821C0.783981 31.7468 0.788483 31.3834 0.907454 31.0511C1.02643 30.7188 1.25282 30.4373 1.54961 30.2528C1.8464 30.0683 2.19601 29.9916 2.54126 30.0353C5.36419 30.3783 8.22532 29.9154 10.804 28.6985C9.54586 28.1172 8.42067 27.2759 7.50004 26.2283C6.5794 25.1808 5.8835 23.9498 5.45666 22.6138C5.37532 22.3581 5.36031 22.0853 5.41307 21.8219C5.46583 21.5585 5.58458 21.3134 5.75783 21.1104L5.77831 21.0896C4.73833 20.1478 3.90484 18.9943 3.33199 17.7039C2.75913 16.4135 2.4597 15.015 2.45316 13.5993V13.4911C2.45301 13.1482 2.56386 12.8148 2.76862 12.5424C2.97337 12.2699 3.26065 12.0735 3.58613 11.9834C2.89236 10.5765 2.53241 9.02392 2.53511 7.45015C2.53395 5.66593 2.99312 3.91259 3.86681 2.36505C3.99094 2.14537 4.16578 1.95968 4.37626 1.82399C4.58674 1.6883 4.82654 1.60668 5.07497 1.58619C5.3234 1.56569 5.57301 1.60693 5.80226 1.70634C6.03152 1.80575 6.23353 1.96036 6.3909 2.15682C9.97459 6.64414 15.1088 9.57137 20.7446 10.3405C20.6957 8.46672 21.1607 6.61612 22.0877 4.99576C23.0148 3.37539 24.3671 2.0492 25.9935 1.16562C26.8172 0.719993 27.9071 0.363911 29.0298 0.16817H29.0278ZM5.92173 15.8858C6.31957 17.0238 7.0013 18.0374 7.9002 18.8273C8.7991 19.6171 9.88437 20.1563 11.0498 20.392C11.3856 20.46 11.6894 20.64 11.913 20.9035C12.1367 21.1669 12.2673 21.4988 12.2843 21.8463C12.3012 22.1939 12.2035 22.5372 12.0066 22.8219C11.8096 23.1066 11.5248 23.3162 11.1973 23.4176C10.64 23.5905 10.0684 23.7091 9.48864 23.7779C10.1181 24.6032 10.9215 25.2747 11.8397 25.7431C12.7579 26.2116 13.7677 26.465 14.795 26.4849C15.1118 26.491 15.4191 26.5965 15.6746 26.787C15.9302 26.9774 16.1216 27.2436 16.2225 27.5489C16.3235 27.8542 16.3291 28.1838 16.2386 28.4925C16.1481 28.8012 15.9658 29.0739 15.7169 29.2732C13.5805 30.9817 11.0979 32.1871 8.44786 32.8028C10.6418 33.5165 12.9318 33.8783 15.2354 33.8752H15.2539C18.2041 33.9068 21.131 33.3405 23.8635 32.2094C26.596 31.0783 29.0793 29.4051 31.1683 27.2874C33.2573 25.1698 34.9102 22.6502 36.0303 19.876C37.1504 17.1017 37.7153 14.1283 37.692 11.1297V10.0156C37.6917 9.63639 37.8272 9.27001 38.0731 8.98484C38.2165 8.82034 38.4624 8.44135 38.8107 7.81873C39.1385 7.2315 39.5031 6.52351 39.8822 5.77594L39.9498 5.63851C38.8796 5.88329 37.7776 5.9515 36.6861 5.84049C36.317 5.79963 35.9749 5.62432 35.7232 5.34698C34.6928 4.21143 33.3208 3.45559 31.8223 3.19799C31.0665 3.08933 30.2984 3.10691 29.5482 3.25005C28.8169 3.36574 28.107 3.59247 27.442 3.92265C26.1014 4.65064 25.0365 5.81034 24.4143 7.21983C23.7922 8.62931 23.6479 10.2088 24.0042 11.7106C24.0603 11.9468 24.0614 12.193 24.0074 12.4296C23.9534 12.6663 23.8459 12.8869 23.6933 13.0739C23.5408 13.2609 23.3474 13.4092 23.1286 13.5069C22.9097 13.6046 22.6715 13.6491 22.4328 13.6368C16.1381 13.3132 10.187 10.621 5.73734 6.08413C5.65089 6.53485 5.60767 6.99303 5.60827 7.45223V7.4564C5.60596 8.60325 5.88272 9.73287 6.4139 10.7447C6.94508 11.7565 7.71418 12.6191 8.65274 13.2557C8.92836 13.4443 9.13642 13.7185 9.24576 14.0374C9.35509 14.3563 9.3598 14.7026 9.25919 15.0244C9.15857 15.3462 8.95804 15.6262 8.68766 15.8224C8.41728 16.0186 8.09162 16.1205 7.75948 16.1127C7.14117 16.0953 6.52586 16.0207 5.92173 15.8858Z"
                fill="white"
              />
            </svg>
            <svg
              width="49"
              height="47"
              viewBox="0 0 49 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" cursor-pointer"
            >
              <path
                d="M44.5201 1.87671H5.20508C4.55861 1.87671 3.93863 2.12282 3.48151 2.56089C3.02439 2.99896 2.76758 3.59312 2.76758 4.21265V41.8931C2.76758 42.5126 3.02439 43.1068 3.48151 43.5449C3.93863 43.9829 4.55861 44.229 5.20508 44.229H26.3626V27.8308H20.6101V21.4375H26.3626V16.7225C26.3626 11.2528 29.8501 8.27358 34.9426 8.27358C36.6611 8.26771 38.3786 8.35169 40.0876 8.52515V14.2428H36.5663C33.7951 14.2428 33.2588 15.5042 33.2588 17.355V21.4375H39.8626L39.0038 27.8308H33.2588V44.2326H44.5088C45.155 44.2317 45.7744 43.9853 46.2313 43.5474C46.6882 43.1095 46.9453 42.5159 46.9463 41.8967V4.21624C46.9473 3.59795 46.6925 3.0045 46.2377 2.56596C45.7829 2.12742 45.1652 1.87956 44.5201 1.87671Z"
                fill="white"
              />
            </svg>
          </div>
          <p className=" flex justify-center pt-2 text-white-100 font-montserrat font-light hover:text-yellow-200 cursor-pointer">
            gympro@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
