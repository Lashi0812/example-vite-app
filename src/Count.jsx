import { useEffect } from "react";

export default function Count({ number }) {
    useEffect(() => {
        document.title = `You clicked ${number} times`;
        return () => {
            document.title = "React App";
        }
    })
  return <span>{number}</span>;
}
