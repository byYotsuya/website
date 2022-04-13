export const Card = ({
  children,
  type = "aside",
  bgColor = "white",
  headerColor = "#202225",
  headerTitle,
}) => {
  const CardContent = () => (
    <>
      <h4 className={`text-[${headerColor}]`} as="h4">
        {headerTitle}
      </h4>
      <section>{children}</section>
    </>
  );

  const AsideCard = ({ children }) => (
    <div
      className={`bg-[${bgColor}] dark:bg-slate-900 max-w-full mt-4 w-full xl:w-1/3 h-full text-yellow-500 border-2 border-gray-900 dark:border-gray-400 shadow-md rounded-lg p-4 lg:p-6 xl:p-8`}>
      {children}
      <CardContent />
    </div>
  );

  const HomeCard = ({ children }) => (
    <div className={`bg-[${bgColor}] shadow-md max-w-full mt-4 w-full h-full text-yellow-500 md:rounded-lg p-4 lg:p-8 xl:p-16 my-4 mx-0 lg:mx-6`} >
      {children}
      <CardContent />
    </div>
  );

  const LandingCard = ({ children }) => (
    <div className={`bg-[${bgColor}] shadow-md max-w-full mt-4 w-full xl:w-[600px] text-yellow-500 md:rounded-lg p-4 lg:p-8 xl:p-16 my-4 mx-0 lg:mx-auto mb-16`}>
      {children}
      <CardContent />
    </div>
  );

  if (type === "aside") return <AsideCard />;
  if (type === "home") return <HomeCard />;
  if (type === "landing") return <LandingCard />;
};