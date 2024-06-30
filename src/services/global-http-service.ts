import apiClient from "./api-client"

interface Data {
    id: string
}

class GlobalHTTPService {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    // Get all data
    getAll<T>() {
        const controller = new AbortController()

        const request =  apiClient.get<T>(this.endpoint, {
            signal: controller.signal
        })

        return { request, cancel: () => controller.abort() }
    }

    // Load more content
    loadNext(cursor: string) {
        return apiClient.get(this.endpoint + '?cursor='+ cursor)
    }

    // Delete data
    delete(id: string) {
        return apiClient.delete(this.endpoint + '/' + id)
    }

    // Add data
    create<T>(data: T) {
        return apiClient.post(this.endpoint, data)
    }

    // Update data
    update<T extends Data>(data: T) {
        return apiClient.patch(this.endpoint + '/' + data.id, data)
    }
}

const create = (endpoint: string) => new GlobalHTTPService(endpoint)

export default create
