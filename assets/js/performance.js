// Performance optimizations
(function() {
    'use strict';

    // Lazy loading implementation
    function lazyLoad() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        const videos = document.querySelectorAll('video[loading="lazy"]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        const videoObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target;
                    video.classList.add('loaded');
                    if (video.paused) {
                        video.play().catch(e => console.log('Video autoplay failed:', e));
                    }
                    observer.unobserve(video);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
        videos.forEach(video => videoObserver.observe(video));
    }

    // Preload critical resources
    function preloadCriticalResources() {
        const criticalImages = [
            'media/covers/earthquake_cover.png',
            'media/covers/retail_sql_cover.jpg',
            'media/covers/spotify_cover.jpg'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    // Optimize font loading
    function optimizeFontLoading() {
        if ('fonts' in document) {
            document.fonts.ready.then(() => {
                document.body.classList.add('fonts-loaded');
            });
        }
    }

    // Service Worker registration for caching
    function registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => {
                    console.log('Service Worker registered successfully:', registration.scope);
                })
                .catch(error => {
                    console.log('Service Worker registration failed:', error);
                });
        }
    }

    // Performance monitoring
    function monitorPerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                }, 0);
            });
        }
    }

    // Initialize all optimizations
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                lazyLoad();
                optimizeFontLoading();
                preloadCriticalResources();
                monitorPerformance();
            });
        } else {
            lazyLoad();
            optimizeFontLoading();
            preloadCriticalResources();
            monitorPerformance();
        }
        
        // Register service worker after everything else
        setTimeout(registerServiceWorker, 1000);
    }

    init();

})();
