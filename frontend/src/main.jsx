import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header } from "./containers/components/Header/index.jsx";
import { AppProvider } from "./hooks/index.jsx";
import { router } from "./routes";
import GlobalStyles from "./styles/globalStyles.js";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AppProvider>
			<RouterProvider router={router} />
			<GlobalStyles />
			<ToastContainer autoClose={2000} theme="colored" />
		</AppProvider>
	</StrictMode>,
);
