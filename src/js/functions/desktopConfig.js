import f from "."

export const desktopConfig = (payload = 0) => {
    if(f.watchZoom().data.screenWidth > 1025) {
        return payload
      }
}