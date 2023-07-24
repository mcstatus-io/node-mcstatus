const dist = require('../dist');

const host = process.env.HOST || 'demo.mcstatus.io';
const port = parseInt(process.env.PORT || '25565');

test('statusJava()', () => {
    return dist.statusJava(host, port)
        .then((result) => {
            expect(typeof result).toBe('object');

            // result.online
            expect(typeof result.online).toBe('boolean');

            // result.host
            expect(typeof result.host).toBe('string');
            expect(result.host.length).toBeGreaterThan(0);
            expect(result.host).toBe(host);

            // result.port
            expect(typeof result.port).toBe('number');
            expect(result.port).toBeGreaterThanOrEqual(0);
            expect(result.port).toBeLessThanOrEqual(65535);
            expect(result.port).toBe(port);
            expect(Number.isInteger(result.port)).toBe(true);

            // result.eula_blocked
            expect(typeof result.eula_blocked).toBe('boolean');

            // result.retrieved_at
            expect(typeof result.retrieved_at).toBe('number');
            expect(result.retrieved_at).toBeGreaterThan(0);
            expect(Number.isInteger(result.retrieved_at)).toBe(true);

            // result.expires_at
            expect(typeof result.expires_at).toBe('number');
            expect(result.expires_at).toBeGreaterThan(0);
            expect(Number.isInteger(result.expires_at)).toBe(true);
            expect(result.expires_at).toBeGreaterThan(result.retrieved_at);

            if (result.online) {
                // result.version
                expect(typeof result.version).toBe('object');

                if (result.version !== null) {
                    // result.version.name_raw
                    expect(typeof result.version.name_raw).toBe('string');
                    expect(result.version.name_raw.length).toBeGreaterThan(0);

                    // result.version.name_clean
                    expect(typeof result.version.name_clean).toBe('string');
                    expect(result.version.name_clean.length).toBeGreaterThan(0);

                    // result.version.name_html
                    expect(typeof result.version.name_html).toBe('string');
                    expect(result.version.name_html.length).toBeGreaterThan(0);

                    // result.version.protocol
                    expect(typeof result.version.protocol).toBe('number');
                    expect(Number.isInteger(result.version.protocol)).toBe(true);
                }

                // result.players
                expect(typeof result.players).toBe('object');

                // result.players.online
                expect(typeof result.players.online).toBe('number');
                expect(result.players.online).toBeGreaterThanOrEqual(0);
                expect(Number.isInteger(result.players.online)).toBe(true);

                // result.players.max
                expect(typeof result.players.max).toBe('number');
                expect(result.players.max).toBeGreaterThanOrEqual(0);
                expect(Number.isInteger(result.players.max)).toBe(true);

                // result.players.list
                expect(Array.isArray(result.players.list)).toBe(true);

                for (const player of result.players.list) {
                    // result.players.list[i].uuid
                    expect(typeof player.uuid).toBe('string');
                    expect(player.uuid.length).toBeGreaterThanOrEqual(0);

                    // result.players.list[i].name_raw
                    expect(typeof player.name_raw).toBe('string');
                    expect(player.name_raw.length).toBeGreaterThanOrEqual(0);

                    // result.players.list[i].name_clean
                    expect(typeof player.name_clean).toBe('string');
                    expect(player.name_clean.length).toBeGreaterThanOrEqual(0);

                    // result.players.list[i].name_html
                    expect(typeof player.name_html).toBe('string');
                    expect(player.name_html.length).toBeGreaterThanOrEqual(0);
                }

                // result.motd
                expect(typeof result.motd).toBe('object');

                // result.motd.raw
                expect(typeof result.motd.raw).toBe('string');
                expect(result.motd.raw.length).toBeGreaterThan(0);

                // result.motd.clean
                expect(typeof result.motd.clean).toBe('string');
                expect(result.motd.clean.length).toBeGreaterThan(0);

                // result.motd.html
                expect(typeof result.motd.html).toBe('string');
                expect(result.motd.html.length).toBeGreaterThan(0);

                // result.icon
                expect(typeof result.icon === 'string' || result.icon === null).toBe(true);

                if (typeof result.icon === 'string') {
                    expect(result.icon.length).toBeGreaterThan(0);
                    expect(result.icon.startsWith('data:image/png;base64,')).toBe(true);
                }

                // result.mods
                expect(Array.isArray(result.mods)).toBe(true);

                for (const mod of result.mods) {
                    // result.mods[i].name
                    expect(typeof mod.name).toBe('string');
                    expect(mod.name.length).toBeGreaterThan(0);

                    // result.mods[i].version
                    expect(typeof mod.version).toBe('string');
                    expect(mod.version.length).toBeGreaterThan(0);
                }

                // result.software
                expect(typeof result.software === 'string' || result.software === null).toBe(true);

                if (result.software !== null) {
                    expect(result.software.length).toBeGreaterThan(0);
                }

                // result.plugins
                expect(Array.isArray(result.plugins)).toBe(true);

                for (const plugin of result.plugins) {
                    // result.plugins[i].name
                    expect(typeof plugin.name).toBe('string');
                    expect(plugin.name.length).toBeGreaterThan(0);

                    // result.plugins[i].version
                    expect(typeof plugin.version).toBe('string');
                    expect(plugin.version.length).toBeGreaterThan(0);
                }
            }
        });
});