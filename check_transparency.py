
from PIL import Image
import sys

def check_transparency(image_path):
    try:
        img = Image.open(image_path)
        if img.mode != 'RGBA':
            print(f"Image mode is {img.mode}, not RGBA. No alpha channel.")
            return

        extrema = img.getextrema()
        alpha_extrema = extrema[3]
        
        print(f"Alpha channel range: {alpha_extrema}")
        
        if alpha_extrema[0] == 255:
             print("Alpha channel is fully opaque (all 255). Image is NOT transparent.")
        elif alpha_extrema[0] == 0 and alpha_extrema[1] == 0:
             print("Image is fully transparent.")
        else:
             print("Image has transparency.")
             
    except Exception as e:
        print(f"Error: {e}")

check_transparency('/Users/manimuru/Library/CloudStorage/OneDrive-Personal(2)/mmanico-website 3/public/m-mani-logo-transparent.png')
