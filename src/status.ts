import superagent from 'superagent';
import { BASE_URL } from './enum';

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
	eula_blocked: boolean,
	retrieved_at: number,
	expires_at: number
}

interface JavaStatusResponse extends StatusResponse {
	version?: {
		name_raw: string,
		name_clean: string,
		name_html: string,
		protocol: number
	} | null,
	players?: {
		online: number,
		max: number,
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
		version: string
	}[],
	software?: string
}

interface BedrockStatusResponse extends StatusResponse {
	version?: {
		name: string,
		protocol: number
	},
	players?: {
		online: number,
		max: number
	},
	motd?: {
		raw: string,
		clean: string,
		html: string
	},
	gamemode?: string,
	server_id?: string,
	edition?: 'MCPE' | 'MCEE'
}

const statusJava = async (host: string, port = 25565, options?: JavaStatusOptions): Promise<JavaStatusResponse> => {
    const result = await superagent.get(`${options?.baseURL ?? BASE_URL}/status/java/${host}:${port}?query=${options?.query ?? true}`);

    if (result.statusCode !== 200) {
        throw new Error(result.body);
    }

    return result.body as JavaStatusResponse;
};

const statusBedrock = async (host: string, port = 19132, options?: BedrockStatusOptions): Promise<BedrockStatusResponse> => {
    const result = await superagent.get(`${options?.baseURL ?? BASE_URL}/status/bedrock/${host}:${port}`);

    if (result.statusCode !== 200) {
        throw new Error(result.body);
    }

    return result.body as BedrockStatusResponse;
};

export { statusJava, statusBedrock, StatusResponse, JavaStatusResponse, BedrockStatusResponse };
