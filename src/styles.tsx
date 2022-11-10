import { ToastOptions } from "./utils/types";
const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] dark:text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal dark:text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  button:
    "border rounded-[4px] cursor-[pointer] font-bold uppercase text-dimWhite bg-blue-gradient outline-none hover:opacity-[0.8] w-full h-[48px] ",
  input:
    "bg-[transparent] border-[0.1rem] border-primary px-[2rem] py-[1rem] rounded-[0.4rem] outline-none hover:border-secondary focus:border-secondary dark:text-dimWhite w-full text-[1rem]",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export const toastOptions: ToastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export default styles;
