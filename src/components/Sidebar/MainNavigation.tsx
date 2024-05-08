import {
     Book,
     Film,
     Home,
     Popcorn,
   } from 'lucide-react'
   import { NavItem } from './NavItem'
   
   export function MainNavigation() {
     return (
       <nav className="space-y-0.5">
         <NavItem title="Home" icon={Home}  />
         <NavItem title="Filmes" icon={Film} />
         <NavItem title="Livros" icon={Book} />
         <NavItem title="Séries" icon={Popcorn} />
       </nav>
     )
   }
   