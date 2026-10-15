import urllib.request
import re
import json

headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
url = "https://web.archive.org/web/20231201000000/https://woodleybuilders.co.uk/"

try:
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=12) as response:
        content = response.read().decode('utf-8', errors='ignore')
        print(f"Success! Content length: {len(content)}")
        with open("archived_home.html", "w") as f:
            f.write(content)
        
        # Extract title
        m_title = re.search(r"<title>(.*?)</title>", content, re.IGNORECASE | re.DOTALL)
        if m_title:
            print("Title:", m_title.group(1).strip())
            
        # Extract meta description
        m_desc = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\'](.*?)["\']', content, re.IGNORECASE)
        if m_desc:
            print("Meta Description:", m_desc.group(1).strip())

        # Extract links
        links = set(re.findall(r'href=["\']([^"\']+)["\']', content))
        print(f"Found {len(links)} links:")
        for link in sorted(links):
            if "woodley" in link or link.startswith("/") or link.endswith(".html") or link.endswith(".php"):
                print("  Link:", link)
                
        # Extract image src
        imgs = set(re.findall(r'src=["\']([^"\']+\.(?:png|jpg|jpeg|gif|svg|webp))["\']', content, re.IGNORECASE))
        print(f"Found {len(imgs)} images:")
        for img in sorted(imgs):
            print("  Image:", img)
except Exception as e:
    print("Fetch error:", e)
