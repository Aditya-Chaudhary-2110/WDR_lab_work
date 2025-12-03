import { NotesProvider } from "./context/NotesContext";
import NotesPage from "./NotesPage.jsx";

export default function App() {
  return (
    <NotesProvider>
      <NotesPage />
    </NotesProvider>
  );
}
