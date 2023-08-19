import Card from './Card';
import DivCards from "./Styledcards";

export default function Cards({ characters, onClose }) {
   return (
     <DivCards>
       {characters?.map((characters) => (
         <Card
           key={characters.id}
           characters={characters}
           isOpen={characters.isOpen}
           onClose={() => onClose(characters.id)}
           id= {characters.id}
         />
       ))}
     </DivCards>
   );
 }

