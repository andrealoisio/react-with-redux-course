import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearInterval(timerId);
    }
  }, [text])

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      console.log(data.data);
      if (data.data && data.data.translations) {
        setTranslated(data.data.translations[0].translatedText);
      }
    };

    console.log("Alterou o langue ou o texto");
    doTranslation();
  }, [language, debouncedText]);

  return (
    <div className="ui header">
      {translated}
    </div>
  );
};

export default Convert;
