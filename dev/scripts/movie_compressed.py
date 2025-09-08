from moviepy import VideoFileClip
import os

# Ruta al video dentro de tu repositorio local
video_path = r"C:\Users\celto\OneDrive - Personal\OneDrive\Data\Github\zuus89.github.io\images\sports_retail.mp4"

# Ruta temporal para guardar versión comprimida
compressed_path = video_path.replace(".mp4", "_compressed.mp4")

# Cargar video original
clip = VideoFileClip(video_path)

# Redimensionar a 720p y exportar con menor bitrate
clip_resized = clip.resized(height=720)
clip_resized.write_videofile(
    compressed_path,
    codec="libx264",
    bitrate="1000k",
    audio_codec="aac"
)

# Reemplazar el archivo original con el comprimido
os.remove(video_path)
os.rename(compressed_path, video_path)

print("✅ Video comprimido y reemplazado correctamente.")
