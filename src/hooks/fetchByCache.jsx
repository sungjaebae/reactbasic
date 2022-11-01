const fetchByCache = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetchByCache(url).then(setData);
  }, []);
  return <div>{JSON.stringify(data)}</div>;
};
