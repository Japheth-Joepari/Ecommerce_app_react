import { CategorySideBar } from "./CategorySideBar";
import { NewsLeter } from "./NewsLetter";
import { TagSideBar } from "./TagSideBar";

export const SideBar = () => {
  return (
    <>
      <div className="col-xs-12 col-sm-12 col-md-3 sidebar">
        <CategorySideBar />
        <TagSideBar />
        <NewsLeter />
      </div>
    </>
  );
};
