import superagent from 'superagent';
import { BASE_URL, REQUEST_TIMEOUT } from './enum';

interface JavaStatusOptions {
	query?: boolean,
	baseURL?: string,
}

interface BedrockStatusOptions {
	baseURL?: string,
}

interface StatusResponse {
	online: boolean,
	host: string,
	port: number,
	ip_address: string | null,
	eula_blocked: boolean,
	retrieved_at: number,
	expires_at: number
}

interface JavaStatusResponse extends StatusResponse {
	srv_record?: {
		host: string,
		port: number
	} | null,
	version?: {
		name_raw: string,
		name_clean: string,
		name_html: string,
		protocol: number
	} | null,
	players?: {
		online: number | null,
		max: number | null,
		list: {
			uuid: string,
			name_raw: string,
			name_clean: string,
			name_html: string
		}[]
	},
	motd?: {
		raw: string,
		clean: string,
		html: string
	},
	icon?: string | null,
	mods?: {
		name: string,
		version: string
	}[],
	plugins?: {
		name: string,
		version: string | null
	}[],
	software?: string | null
}

interface BedrockStatusResponse extends StatusResponse {
	version?: {
		name: string | null,
		protocol: number | null
	},
	players?: {
		online: number | null,
		max: number | null,
		list: {
			uuid: string,
			name_raw: string,
			name_clean: string,
			name_html: string
		}[]
	},
	motd?: {
		raw: string,
		clean: string,
		html: string
	},
	gamemode?: string | null,
	server_id?: string | null,
	edition?: 'MCPE' | 'MCEE' | null,
	software?: string | null,
	plugins?: {
		name: string,
		version: string | null
	}[]
}

const statusJava = async (host: string, port = 25565, options?: JavaStatusOptions): Promise<JavaStatusResponse> => {
    const result = await superagent
        .get(`${options?.baseURL ?? BASE_URL}/status/java/${encodeURIComponent(host)}:${port}?query=${options?.query ?? true}`)
        .timeout({ deadline: REQUEST_TIMEOUT });

    return result.body as JavaStatusResponse;
};

const statusBedrock = async (host: string, port = 19132, options?: BedrockStatusOptions): Promise<BedrockStatusResponse> => {
    const result = await superagent
        .get(`${options?.baseURL ?? BASE_URL}/status/bedrock/${encodeURIComponent(host)}:${port}`)
        .timeout({ deadline: REQUEST_TIMEOUT });

    return result.body as BedrockStatusResponse;
};

export { statusJava, statusBedrock, StatusResponse, JavaStatusResponse, BedrockStatusResponse };
