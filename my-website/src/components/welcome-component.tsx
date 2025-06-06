import React from "react";


const WelcomeText = () => {
    const fullText = "hi there! Wasssup...";
    const [displayWelcomeText, setDisplayWelcomeText] = React.useState("");

    React.useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayWelcomeText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) clearInterval(interval);
        }, 100); // typing speed

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div>
        <p style={{ color: "purple", fontSize: "2rem", textAlign: "left", paddingLeft: "20px" }}>
            {displayWelcomeText} <br />
        </p>
        </div>
    );
}

export default WelcomeText;