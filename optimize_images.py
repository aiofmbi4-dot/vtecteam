import os
from PIL import Image

def optimize():
    # Папки, которые нужно обработать
    folders = ['./Фото работы', './Фон']
    
    for folder in folders:
        if not os.path.exists(folder):
            continue
            
        for root, dirs, files in os.walk(folder):
            for file in files:
                if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                    filepath = os.path.join(root, file)
                    img = Image.open(filepath)
                    
                    # Уменьшаем, если слишком большая
                    if img.width > 1920:
                        img.thumbnail((1920, 1920))
                    
                    # Генерим путь для WebP
                    webp_path = os.path.splitext(filepath)[0] + ".webp"
                    
                    # Сохраняем в WebP (качество 80)
                    img.save(webp_path, "WEBP", quality=80)
                    print(f"Оптимизировано: {webp_path}")
                    
                    # Опционально: удали оригинал, если хочешь оставить только webp
                    # os.remove(filepath)

if __name__ == "__main__":
    optimize()