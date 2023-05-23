1. When does the code in a loader function run?
Before the route change happens and the component for that route loads
(перед изменением маршрута и загрузкой компонента этого маршрута)
 

2. What are some benefits of using a data loader function
   instead of fetching our data in a useEffect in a component?

   * Don't need to worry about handling loading state in the 
      component (не нужно прописывать состояние компонента во время загрузки данных)
    * Don't need to have lengthy/confusing useEffect code in our
      component (не нужен длинный/запутанный код хука useEffect в компоненте)
    * Don't need to handle error state in the component (не нужно обрабатывать ошибки сервера/данных в компоненте)
   
   
3. What change do we need to make to our BrowserRouter before
   we can use loaders (or any of the new data-layer API features)
   in our app?
   
   we need to replace BrowserRouter with createBrowserRouter constructor and put our Routes into createRouterFromElements function instead of <Routes> 
   
   
4. What are the steps we need to take in order to use
   a loader on any given route?
   
   1. create and export loader function from the page component
   2. import loader function in the file that holds routes
   pass imported loader function to Route as a prop loader={loaderFunction}
   3. import useLoaderData hook from react router into page component and call it to get the data 