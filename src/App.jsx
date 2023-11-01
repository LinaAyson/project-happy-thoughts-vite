import PostContainer from "./components/PostContainer";
import ListContainer from "./components/ListContainer";
import Header from "./components/Header";


export const App = () => {
  return (
    <div className="main-container">
      <Header />
      <PostContainer />
      <ListContainer />
    </div>
  );
};
