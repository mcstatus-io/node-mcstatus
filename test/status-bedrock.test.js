const dist = require('../dist');

const host = process.env.HOST || 'demo.mcstatus.io';
const port = parseInt(process.env.PORT || '19132');

test('statusBedrock()', () => {
    return dist.statusBedrock(host, port)
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
                    // result.version.name
                    expect(typeof result.version.name).toBe('string');
                    expect(result.version.name.length).toBeGreaterThan(0);

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

                // result.gamemode
                expect(typeof result.gamemode).toBe('string');
                expect(result.gamemode.length).toBeGreaterThan(0);

                // result.server_id
                expect(typeof result.server_id).toBe('string');
                expect(result.server_id.length).toBeGreaterThan(0);

                // result.edition
                expect(typeof result.edition).toBe('string');
                expect(['MCPE', 'MCEE']).toContain(result.edition);
            }
        });
});