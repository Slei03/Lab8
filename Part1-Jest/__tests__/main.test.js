const formatVolumeIconPath = require("../assets/scripts/main");

describe( 'correct icon', () =>{
    test('correct icon when volume=67 > 66', () => {
        expect(formatVolumeIconPath(67)).toMatch(('./assets/media/icons/volume-level-3.svg'));
    });
    test('correct icon when 33< volume=66 < 66', () => {
        expect(formatVolumeIconPath(66)).toMatch(('./assets/media/icons/volume-level-2.svg'));
    });
    test('correct icon when 33 < volume=34 < 66', () => {
        expect(formatVolumeIconPath(34)).toMatch(('./assets/media/icons/volume-level-2.svg'));
    });
    test('correct icon when 0< volume < 34', () => {
        expect(formatVolumeIconPath(33)).toMatch(('./assets/media/icons/volume-level-1.svg'));
    });
    test('correct icon when 0< volume=1 < 33', () => {
        expect(formatVolumeIconPath(1)).toMatch(('./assets/media/icons/volume-level-1.svg'));
    });
    test('correct icon when mute', () => {
        expect(formatVolumeIconPath(0)).toMatch(('./assets/media/icons/volume-level-0.svg'));
    });
});
