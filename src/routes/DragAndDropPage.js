import styled from "styled-components";
import { useDraggable } from "../hooks/useDraggable";

const box1Initial = ["A", "B"];
const box2Initial = ["A", "B"];

export const DragAndDropPage = () => {
   const { box1, box2, onDragHandler, onDragEndHandler, onDropHandler } = useDraggable(
      box1Initial,
      box2Initial
   );

   return (
      <Wrapper>
         <Box id="box1" onDrop={ (e,event)=>onDropHandler(e, event)}>
            {box1.map((el, index) => (
               <div
                  key={index}
                  index={index}
                  draggable
                  onDrag={onDragHandler}
                  onDragEnd={onDragEndHandler}
                  
               
               >
                  {el}
               </div>
            ))}
         </Box>

         <Box id="box2">
            {box2.map((el, index) => (
               <div
                  key={index}
                  index={index}
                  draggable
                  onDrag={onDragHandler}
                  onDragEnd={onDragEndHandler}
               >
                  {el}
               </div>
            ))}
         </Box>
      </Wrapper>
   );
};

const Box = styled.div`
   padding: 10px;
   width: 400px;
   height: 400px;

   display: grid;
   grid-template-columns: repeat(auto-fit, 100px);

   gap: 10px;
   div {
      background: #ffd369;
      height: 100%;
      font-size: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 800;
   }

   background: #393e46;
`;

const Wrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   align-items: center;
`;
