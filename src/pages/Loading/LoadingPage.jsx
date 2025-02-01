import { CircularProgress } from "@mui/material";

export const LoadingPage = () => {
  return (
    <main className="loading-page main">
      <CircularProgress color="secondary" size={"5rem"} />
    </main>
  );
};
