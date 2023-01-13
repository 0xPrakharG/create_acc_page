import Content from "./Content";
function App() {
  return (
    <div className="h-[901px] overflow-hidden">
      <img src="./images/logo.svg" alt="wobot.ai_logo" className="absolute w-[160px] h-[36.02px] left-[60px] top-[60px]"/>
      <Content/>
      <div className="relative w-[1720.59px] h-[901.17px] left-[-124.11px] top-[-169.36px] -z-10">
        <div className="absolute w-[769.01px] h-[13.44px] left-[870px] top-[617.51px] bg-[#3766e8] opacity-[0.2] rotate-[-30deg] xl:w-[1000px] xl:top-[551px]"></div>
        <div className="absolute w-[769.01px] h-[13.44px] left-[-124.11px] top-[723.3px] bg-[#3766e8] opacity-[0.2] rotate-[-30deg]"></div>
        <div className="absolute w-[1852.96px] h-[392.25px] left-[-117.75px] top-[451.51px] bg-[#f0f0f0] opacity-[0.45] rotate-[-30deg]"></div>
      </div>
      <div className="absolute font-Roboto text-[14px] w-[185px] h-[19px] left-[627px] top-[825px]">Terms of use | Privacy policy</div>
    </div>
  );
}

export default App;
