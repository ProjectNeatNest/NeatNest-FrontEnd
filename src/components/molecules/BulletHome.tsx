import type { ReactNode } from "react";
import Title from "../typography/Title";
import BodyText from "../typography/BodyText";

interface Props { 
   title: string, 
   icon?: ReactNode,
   children: string, 
}

export default function BulletHome(props: Props) { 
   const { title, icon, children } = props;
   return (<div className="flex flex-col items-center">
               {icon && <span className="text-neutral-primary">{icon}</span>}
               <Title
                  as='h3'
                  variant='title-small-regular'
                  className='text-neutral-primary'
               >
                  {title}
               </Title>
               <BodyText
                  as='p'
                  variant='body-medium-regular'
                  className='max-w-xs mt-2 text-center text-neutral-secondary'
               >
                  {children}
               </BodyText>
            </div>)
}

