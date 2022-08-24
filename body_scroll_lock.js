import { useEffect } from 'react'

import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";

export const useBodyScrollLock = ( {modalIsOpen} ) => {
  useEffect(() => {

      if (modalIsOpen) {
          disableBodyScroll("#modal");
      } else {
          enableBodyScroll("#modal");
      }

      return () => clearAllBodyScrollLocks();
  }, [modalIsOpen])
};

// export default useBodyScrollLock;
