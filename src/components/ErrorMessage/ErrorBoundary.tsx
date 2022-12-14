import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles";
import { welcomeRobo } from "../../assets/";

interface ErrorProps {
  hasError: boolean;
}
interface ErrorState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<any, ErrorState> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: any) {}

  reRoute = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-[100vw] inset-0 fixed overflow-y-scroll overflow-x-hidden z-[100000] dark:bg-primary bg-[white]">
          <img src={welcomeRobo} className="absolute right-[10px] top-[10px]" />
          <div className={`${styles.flexCenter} h-full w-full`}>
            <div
              className="dark:bg-[white] bg-zinc-800 dark:text-primary text-dimWhite text-[20px]
              sm:rounded-[8px] rounded-[4px] sm:p-[4rem] p-[1rem] dark:border-dimWhite border-primary border-[1px]"
            >
              <p>
                Something went wrong!!!{" "}
                <Link className="no-underline" to="" onClick={this.reRoute}>
                  Try again
                </Link>
              </p>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
