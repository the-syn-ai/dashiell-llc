/**
 * Utility functions for caching and performance optimization
 */

/**
 * Cache control values for different content types
 */
export const cacheControl = {
  // Static content that rarely changes (images, fonts, etc.)
  static: 'public, max-age=31536000, immutable',
  
  // Content that changes occasionally (service pages, etc.)
  revalidate: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
  
  // Content that changes frequently (home page, etc.)
  dynamic: 'public, max-age=300, s-maxage=3600, stale-while-revalidate=3600',
  
  // Content that should not be cached (forms, etc.)
  noCache: 'no-cache, no-store, must-revalidate',
};

/**
 * Generate cache control headers for a response
 * @param type Cache control type
 * @returns Response headers object
 */
export function generateCacheHeaders(type: keyof typeof cacheControl) {
  return {
    'Cache-Control': cacheControl[type],
  };
}

/**
 * Revalidation periods for different content types (in seconds)
 */
export const revalidatePeriods = {
  // Content that changes occasionally (service pages, etc.)
  standard: 86400, // 24 hours
  
  // Content that changes frequently (home page, etc.)
  frequent: 3600, // 1 hour
  
  // Content that changes rarely (about page, etc.)
  rare: 604800, // 7 days
};

/**
 * Memory cache for storing data between requests
 * This is useful for data that is expensive to fetch but doesn't need to be refetched on every request
 */
class MemoryCache {
  private cache: Map<string, { data: any; timestamp: number }> = new Map();
  
  /**
   * Get data from cache
   * @param key Cache key
   * @param maxAge Maximum age in seconds
   * @returns Cached data or null if not found or expired
   */
  get<T>(key: string, maxAge: number): T | null {
    const cached = this.cache.get(key);
    
    if (!cached) {
      return null;
    }
    
    const now = Date.now();
    const age = (now - cached.timestamp) / 1000;
    
    if (age > maxAge) {
      this.cache.delete(key);
      return null;
    }
    
    return cached.data as T;
  }
  
  /**
   * Set data in cache
   * @param key Cache key
   * @param data Data to cache
   */
  set(key: string, data: any): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }
  
  /**
   * Delete data from cache
   * @param key Cache key
   */
  delete(key: string): void {
    this.cache.delete(key);
  }
  
  /**
   * Clear all data from cache
   */
  clear(): void {
    this.cache.clear();
  }
}

// Export a singleton instance of the memory cache
export const memoryCache = new MemoryCache();