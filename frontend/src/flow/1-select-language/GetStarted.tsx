import { FC } from "react";
import GlowingButton from "../../components/GlowingButton";

interface GetStartedProps {
    handleGetStarted: () => void
}

const GetStarted: FC<GetStartedProps> = ({ handleGetStarted }) => {

    const handlePress = () => {
        handleGetStarted()
    }

  return (
    <>
    <div className="get-started-background">
        <div className="get-started-gradient" />
        <div>
            <h1 className="site-title-text">Code Jawn</h1>
            <GlowingButton
                buttonText="Get Started"
                buttonColor="white"
                buttonPress={handlePress}
            />
        </div>
    </div>
    </>
  );
};

export default GetStarted;
