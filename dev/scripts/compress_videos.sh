#!/bin/bash
# Video compression script using ffmpeg
# Run this script to compress video files in the media/videos directory

echo "Starting video compression..."

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "FFmpeg is not installed. Please install FFmpeg first."
    echo "Windows: Download from https://ffmpeg.org/download.html"
    echo "macOS: brew install ffmpeg"
    echo "Ubuntu: sudo apt install ffmpeg"
    exit 1
fi

# Create compressed directory if it doesn't exist
mkdir -p media/videos/compressed

# Compress mental_health.mp4
if [ -f "media/videos/mental_health.mp4" ]; then
    echo "Compressing mental_health.mp4..."
    ffmpeg -i media/videos/mental_health.mp4 \
           -c:v libx264 \
           -crf 28 \
           -preset medium \
           -c:a aac \
           -b:a 128k \
           -movflags +faststart \
           media/videos/compressed/mental_health_compressed.mp4
    echo "Original size: $(du -h media/videos/mental_health.mp4 | cut -f1)"
    echo "Compressed size: $(du -h media/videos/compressed/mental_health_compressed.mp4 | cut -f1)"
fi

# Compress sports_retail.mp4
if [ -f "media/videos/sports_retail.mp4" ]; then
    echo "Compressing sports_retail.mp4..."
    ffmpeg -i media/videos/sports_retail.mp4 \
           -c:v libx264 \
           -crf 28 \
           -preset medium \
           -c:a aac \
           -b:a 128k \
           -movflags +faststart \
           media/videos/compressed/sports_retail_compressed.mp4
    echo "Original size: $(du -h media/videos/sports_retail.mp4 | cut -f1)"
    echo "Compressed size: $(du -h media/videos/compressed/sports_retail_compressed.mp4 | cut -f1)"
fi

echo "Video compression completed!"
echo "Replace the original video sources in your HTML files with the compressed versions."
