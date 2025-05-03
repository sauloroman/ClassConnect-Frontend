import { useEffect } from "react";

interface UseGlobalUIAutoCloseProps {
  onEscape?: () => void;
  onClickOutsideMenu?: () => void;
  menuToggleClass?: string
}

export const useGlobalUIAutoClose = ({
  onEscape,
  menuToggleClass,
  onClickOutsideMenu
}: UseGlobalUIAutoCloseProps) => {

  useEffect(() => {

    const handleKeyDown = (e: KeyboardEvent) => {
      if ( e.key === 'Escape' && onEscape ) {
        onEscape()
      }
    }

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if ( !target.classList.contains( menuToggleClass as string ) && onClickOutsideMenu ) {
        onClickOutsideMenu()
      }
    }

    document.body.addEventListener('keydown', handleKeyDown )
    document.body.addEventListener('click', handleClick )
    
    return () => {
      document.body.removeEventListener('keydown', handleKeyDown )
      document.body.removeEventListener('click', handleClick )
    }

  }, [])

}