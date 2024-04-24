import { IoMdCodeWorking } from "react-icons/io";

export default function PageInProgress() {
  return (
    <div className="in-progress-container">
      <IoMdCodeWorking />
      <h2>UNDER DEVELOPMENT</h2>
      <p>This page is still in progress, please check later.</p>
    </div>
  );
}
