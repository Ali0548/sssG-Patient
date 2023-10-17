import "@/styles/globals.css";
import "/public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "/public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "/public/assets/vendor/boxicons/css/boxicons.min.css";
import { ProjectProvider } from "@/context/ProjectContext";
export default function App({ Component, pageProps }) {
  return (
    <ProjectProvider>
      <Component {...pageProps} />
    </ProjectProvider>
  );
}
