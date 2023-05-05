import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";

const client = createClient({
  // space is like the userId
  space: "ains6w6nuchk",
  // environment: "master", // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
});

//  Custom hook
export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      // this client will fetch our data from contentful
      const res = await client.getEntries({ content_type: "projects" });

      const projects = res.items.map((item) => {
        const { url, title, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        // console.log("https:" + img);
        return { title, url, id, img };
      });

      setLoading(false);
      setProjects(projects);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};

// console.log(reap);
