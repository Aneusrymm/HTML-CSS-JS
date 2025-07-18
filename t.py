from pytube import YouTube

# Ganti dengan link YouTube kamu
url = "https://www.youtube.com/watch?v=V2Q95mKz0Io"

# Inisialisasi objek YouTube
yt = YouTube(url)

# Pilih resolusi tertinggi
video = yt.streams.get_highest_resolution()

# Download ke folder saat ini
video.download()

print("Download selesai!")
