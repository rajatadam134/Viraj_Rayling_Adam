import os
import glob
from PIL import Image

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GOOD_IMAGES_DIR = os.path.join(BASE_DIR, "Good_Images")
WEBSITE_IMAGES_DIR = os.path.join(BASE_DIR, "Website_Images")
PUBLIC_IMAGES_DIR = os.path.join(BASE_DIR, "public", "images")

folder_mapping = {
    "GEM_Towels": ("GEM_Towels", "gem_towels"),
    "Gemini_Towels": ("Gemini_Towels", "gemini_towels"),
    "Sharmili_Towels": ("Sharmili_Towels", "sharmili_towels"),
}

os.makedirs(WEBSITE_IMAGES_DIR, exist_ok=True)

total_orig_size = 0
total_webp_size = 0
count = 0

for src_folder, (site_folder, pub_folder) in folder_mapping.items():
    src_path = os.path.join(GOOD_IMAGES_DIR, src_folder)
    site_dest_path = os.path.join(WEBSITE_IMAGES_DIR, site_folder)
    pub_dest_path = os.path.join(PUBLIC_IMAGES_DIR, pub_folder)

    os.makedirs(site_dest_path, exist_ok=True)
    os.makedirs(pub_dest_path, exist_ok=True)

    png_files = sorted(glob.glob(os.path.join(src_path, "*.png")))
    for png_file in png_files:
        base_name = os.path.splitext(os.path.basename(png_file))[0]
        webp_name = f"{base_name}.webp"

        site_out = os.path.join(site_dest_path, webp_name)
        pub_out = os.path.join(pub_dest_path, webp_name)

        orig_size = os.path.getsize(png_file)
        total_orig_size += orig_size

        with Image.open(png_file) as img:
            img.save(site_out, format="WEBP", quality=92, method=6)
            img.save(pub_out, format="WEBP", quality=92, method=6)

        new_size = os.path.getsize(site_out)
        total_webp_size += new_size
        count += 1
        savings = ((orig_size - new_size) / orig_size) * 100
        print(f"[{count}/25] {base_name}: {orig_size/1024:.1f} KB -> {new_size/1024:.1f} KB ({savings:.1f}% savings)")

print(f"\nFinished! Converted {count} images.")
print(f"Total Original Size: {total_orig_size / (1024*1024):.2f} MB")
print(f"Total WebP Size:     {total_webp_size / (1024*1024):.2f} MB")
print(f"Overall Reduction:   {((total_orig_size - total_webp_size) / total_orig_size)*100:.1f}%")
